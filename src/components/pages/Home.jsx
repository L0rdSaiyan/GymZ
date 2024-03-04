import { LoginController } from "../../controller/LoginController";
import image from "../../images/About.jpg";
import { useEffect } from "react";

export default function Home() {
    
    const cat = localStorage.getItem("user");
    const cat2 = localStorage.getItem("pass");
    const {
        name,
        pass,
        user,
        exercices,
        getUser
    } = LoginController();
    
    useEffect(() => {
        getUser(cat, cat2, false);
    }, []);

    return (
        <div>
              {user && (
              <>
                <p>{user.name}</p>
                {exercices.length > 0 && (
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
                )}
              </>
            )}
        </div>
    );
}
