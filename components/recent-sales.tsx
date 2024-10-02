import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 1</p>
          <p className="text-sm text-muted-foreground">user1@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">Rp. 2.500.000</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 1</p>
          <p className="text-sm text-muted-foreground">user1@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">Rp. 2.500.000</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 1</p>
          <p className="text-sm text-muted-foreground">user1@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">Rp. 2.500.000</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 1</p>
          <p className="text-sm text-muted-foreground">user1@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">Rp. 2.500.000</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 1</p>
          <p className="text-sm text-muted-foreground">user1@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">Rp. 2.500.000</div>
      </div>
    </div>
  );
}
