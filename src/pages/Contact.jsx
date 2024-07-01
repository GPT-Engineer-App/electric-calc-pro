import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <Input id="name" {...register("name", { required: true })} />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <Input id="email" {...register("email", { required: true })} />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <Textarea id="message" {...register("message", { required: true })} />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;