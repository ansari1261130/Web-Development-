import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";

function App() {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors, isSubmitting } 
  } = useForm();
  
  const [submitMessage, setSubmitMessage] = useState("");

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    console.log("Form Data:", data);
    setSubmitMessage("Form submitted successfully!");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            {...register("username", { required: "Username is required" })} 
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input 
            type="email" 
            {...register("email", { 
              required: "Email is required", 
              pattern: { 
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: "Invalid email format" 
              }
            })} 
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input 
            type="password" 
            {...register("password", { 
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Password must be at least 6 characters, include 1 uppercase and 1 number"
              }
            })} 
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label>Confirm Password: </label>
          <input 
            type="password" 
            
            {...register("confirmPassword", { 
              required: "Confirm your password",
              validate: value => value === watch("password") || "Passwords do not match"
            })} 
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <input type="submit" value={isSubmitting ? "Submitting..." : "Submit"} disabled={isSubmitting} />
        
        {/* Success message */}
        {submitMessage && <p style={{ color: "green" }}>{submitMessage}</p>}
      </form>
    </>
  );
}

export default App;
