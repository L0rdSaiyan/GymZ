import Swal from "sweetalert2";

export default function CommonController()
{
    function setAlert(title, text, icon) {
        Swal.fire({
          title: title,
          text: text,
          icon: icon,
        });
      }
    
}