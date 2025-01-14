'use client';
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Check, ChevronsUpDown, Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
// import FileUpload from "@/components/FileUpload";
import { useToast } from '../ui/use-toast';
import FileUpload from '../file-upload';
import { ScrollArea } from '../ui/scroll-area';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../ui/command';
const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string()
});
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  heading: z
    .string()
    .min(3, { message: 'Heading must be at least 3 characters' }),
  imgUrl: z
    .array(ImgSchema)
    .max(IMG_MAX_LIMIT, { message: 'You can only add up to 3 images' })
    .min(1, { message: 'At least one image must be added.' }),
  content: z
    .string()
    .min(3, { message: 'Content must be at least 3 characters' }),
  button1_text: z
    .string()
    .min(3, { message: 'Button text1 must be at least 3 characters' }),
  button1_url: z
    .string()
    .min(3, { message: 'Button text1 must be at least 3 characters' }),
  button2_text: z
    .string()
    .min(3, { message: 'Button text1 must be at least 3 characters' }),
  button2_url: z
    .string()
    .min(3, { message: 'Button text1 must be at least 3 characters' }),
  position: z.string().min(1, { message: 'Please select a position' }),
  language: z.string().min(1, { message: 'Please select a language' })
});

type FileFormValues = z.infer<typeof formSchema>;

interface Position {
  _id: string;
  name: string;
}
interface Language {
  _id: string;
  name: string;
}
interface FileFormProps {
  initialData: any | null;
  positions: Position[];
  languages: Language[];
}

export const FileForm: React.FC<FileFormProps> = ({
  initialData,
  positions,
  languages
}) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = initialData ? 'Edit slider' : 'Create slider';
  const description = initialData ? 'Edit a slider.' : 'Add a new slider';
  const toastMessage = initialData ? 'Data updated.' : 'Data created.';
  const action = initialData ? 'Save changes' : 'Create';

  const defaultValues = initialData
    ? initialData
    : {
        heading: '',
        content: '',
        button1_text: '',
        button1_url: '',
        button2_text: '',
        button2_url: '',
        imgUrl: [],
        positions: '',
        languages: ''
      };
  console.log(defaultValues);

  const form = useForm<FileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: FileFormValues) => {
    try {
      setLoading(true);
      console.log(data);

      toast({
        variant: 'destructive',
        title: 'Submit Success'
      });
      // if (initialData) {
      //   // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      // } else {
      //   // const res = await axios.post(`/api/products/create-product`, data);
      //   // console.log("product", res);
      // }
      router.refresh();
      router.push(`/slider`);
      // toast({
      //   variant: 'destructive',
      //   title: 'Uh oh! Something went wrong.',
      //   description: 'There was a problem with your request.'
      // });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/products`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const triggerImgUrlValidation = () => form.trigger('imgUrl');

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUpload
                    onChange={field.onChange}
                    value={field.value}
                    onRemove={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="gap-5 md:grid">
            <FormField
              control={form.control}
              name="heading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heading</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="heading..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="content..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="button1_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Button1 Text</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="button1 text..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="button1_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Button1 URL</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="button1 URL..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="button2_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Button2 Text</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="button2 text..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="button2_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Button2 URL</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="button2 URL..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Position</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-[200px] justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? positions.find(
                                (position) => position.name === field.value
                              )?.name
                            : 'Select position'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search..." />
                        <CommandList>
                          <CommandEmpty>No position found.</CommandEmpty>
                          <CommandGroup>
                            {positions.map((position) => (
                              <CommandItem
                                value={position.name}
                                key={position._id}
                                onSelect={() => {
                                  form.setValue('position', position.name);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    position.name === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {position.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Language</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-[200px] justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? languages.find(
                                (language) => language.name === field.value
                              )?.name
                            : 'Select language'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search..." />
                        <CommandList>
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {languages.map((language) => (
                              <CommandItem
                                value={language.name}
                                key={language._id}
                                onSelect={() => {
                                  form.setValue('language', language.name);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    language.name === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {language.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
