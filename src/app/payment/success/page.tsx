import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-green-100 p-6 dark:bg-green-900/30">
        <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
      </div>

      <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
        Payment Successful!
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Congratulations! You are now a Premium Member. Enjoy verified status,
        unlimited connections, and exclusive deals.
      </p>

      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg" className="w-full sm:w-auto">
            Go to Dashboard
          </Button>
        </Link>
        <Link href="/explore">
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Find Travelers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
