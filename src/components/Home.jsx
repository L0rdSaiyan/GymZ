import { LoginController } from "../controller/LoginController";
import { useEffect } from "react";
export default function Home()
{
    
    const cat = localStorage.getItem("user");
    const cat2 = localStorage.getItem("pass")
    const{
        name,
        pass,
        user,
        eye,
        isPasswordVisible,
        exercices,
        eyeIcon,
        eyeSlash,
        handleNameChange,
        handlePassChange,
        togglePasswordVisibility,
        handleKeyDown,
        getUser
    } = LoginController()
    
    useEffect(()=>{
        getUser(cat,cat2,false)
    },[])

    


    return(
        <div>
           {cat}
           {user && (
              <>
                <p>{user.name}</p>
                  <div>
                    <p>Exercices:</p>
                    <ul>
                      {exercices.map((exercice, index) => (
                        <li key={index}>
                          {exercice.name} - {exercice.reps}
                        </li>
                      ))}
                    </ul>
                  </div>
              </>
            )}
        </div>
    )
}