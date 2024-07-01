import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Elektro Kalkulatoren</h1>
        <p className="text-lg">Your trusted partner in electrical calculations</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p>
          Elektro Kalkulatoren is dedicated to providing top-notch electrical calculation services. 
          Our team of experts ensures precision and reliability in every project.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Electrical Load Calculations</li>
          <li>Short Circuit Analysis</li>
          <li>Power Factor Correction</li>
          <li>Energy Efficiency Consulting</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
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
      </section>
    </div>
  );
};

export default Index;