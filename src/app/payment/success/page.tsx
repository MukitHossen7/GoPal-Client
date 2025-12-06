/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "@/components/ui/button";
// import { CheckCircle } from "lucide-react";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// interface Props {
//   searchParams: {
//     session_id?: string;
//   };
// }
// const PaymentSuccessPage = ({ searchParams }: Props) => {
//   const { session_id } = searchParams;

//    if (!session_id) {
//     redirect("/dashboard");
//   }
//   return (
//     <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
//       <div className="mb-6 rounded-full bg-green-100 p-6 dark:bg-green-900/30">
//         <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
//       </div>

//       <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
//         Payment Successful!
//       </h1>
//       <p className="mb-8 max-w-md text-muted-foreground">
//         Congratulations! You are now a Premium Member. Enjoy verified status,
//         unlimited connections, and exclusive deals.
//       </p>

//       <div className="flex gap-4">
//         <Link href="/dashboard">
//           <Button size="lg" className="w-full sm:w-auto">
//             Go to Dashboard
//           </Button>
//         </Link>
//         <Link href="/explore">
//           <Button size="lg" variant="outline" className="w-full sm:w-auto">
//             Find Travelers
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccessPage;

import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import PaymentSuccessView from "@/components/modules/Payment/PaymentSuccessView";

interface Props {
  searchParams: {
    session_id?: string;
  };
}

const PaymentSuccessPage = async ({ searchParams }: Props) => {
  const { session_id } = await searchParams;
  if (!session_id) {
    redirect("/dashboard");
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status !== "paid") {
      redirect("/payment/fail");
    }
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Error verifying payment:", error);
    redirect("/dashboard");
  }

  return <PaymentSuccessView />;
};

export default PaymentSuccessPage;
