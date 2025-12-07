// // app/admin/dashboard/activity/page.tsx
// import { getAllTrips, getAllUsers } from "@/app/actions/admin";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import BlurFade from "@/components/magicui/blur-fade";
// import { UserPlus, PlaneTakeoff, Info } from "lucide-react";

// export default async function ActivityPage() {
//   // Fetching data to simulate logs
//   const usersRes = await getAllUsers();
//   const tripsRes = await getAllTrips();

//   // Combining and formatting data for the timeline
//   const activities = [
//     ...(usersRes?.data || []).map((u: any) => ({
//       id: u.id,
//       type: "USER_JOINED",
//       title: "New Traveler Joined",
//       desc: `${u.name} created an account.`,
//       date: new Date(u.createdAt),
//       icon: UserPlus,
//       color: "bg-blue-500",
//     })),
//     ...(tripsRes?.data || []).map((t: any) => ({
//       id: t.id,
//       type: "TRIP_CREATED",
//       title: "New Trip Posted",
//       desc: `${t.traveler?.name} plans to go to ${t.destination}.`,
//       date: new Date(t.createdAt),
//       icon: PlaneTakeoff,
//       color: "bg-orange-500",
//     })),
//   ].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by newest

//   return (
//     <div className="max-w-4xl mx-auto space-y-8">
//       <div className="text-center space-y-2">
//         <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
//             System Activity Log
//         </h1>
//         <p className="text-muted-foreground">Real-time tracking of platform events</p>
//       </div>

//       <Card className="border-none shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Info className="w-5 h-5 text-primary" /> Recent Events
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ScrollArea className="h-[600px] pr-4">
//             <div className="relative border-l border-muted ml-4 space-y-8 pb-10">
//               {activities.map((item, idx) => (
//                 <BlurFade key={item.id} delay={0.05 * idx} inView>
//                   <div className="relative pl-8">
//                     {/* Timeline Dot */}
//                     <span className={`absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full ${item.color} ring-4 ring-background`} />

//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-lg bg-card border hover:shadow-md transition-all">
//                       <div className="flex items-center gap-4">
//                         <div className={`p-2 rounded-full bg-opacity-10 ${item.color.replace('bg-', 'bg-opacity-10 text-')}`}>
//                             <item.icon className={`w-5 h-5 text-white`} />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-foreground">{item.title}</p>
//                           <p className="text-sm text-muted-foreground">{item.desc}</p>
//                         </div>
//                       </div>
//                       <div className="text-xs text-muted-foreground whitespace-nowrap">
//                         {item.date.toLocaleDateString()} <br/> {item.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
//                       </div>
//                     </div>
//                   </div>
//                 </BlurFade>
//               ))}
//             </div>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

const ActivityPage = () => {
  return (
    <div>
      <h1>ActivityPage</h1>
    </div>
  );
};

export default ActivityPage;
