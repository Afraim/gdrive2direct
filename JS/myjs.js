document.getElementById("Dlink").style.display = "none";
document.getElementsByClassName("error")[0].style.display = "none"
function validation(){
        document.getElementsByClassName("error")[0].style.display = "none"
        let text = document.querySelector("input").value;
        if(text != ""){
            let url;
  
            try {
              url = new URL(text);
              value(url.toString());
            } catch (_) {
               return false;  
            }
                
        }
        else{
            
            document.getElementById("Dlink").style.display = "none";
            
            }
    }    

        function value(T){
            var Array = T.split("/");
            console.log(Array);
            const TEXT = "https://drive.google.com/uc?export=download&id=";
            if(TEXT + Array[5]!="https://drive.google.com/uc?export=download&id=undefined"){
                document.getElementById("Dlink").value = TEXT + Array[5];
                document.getElementById("Dlink").style.display = "block";
                document.getElementById("afterSubmit").style.display = "block";
            }
            else{
                document.getElementsByClassName("error")[0].style.display = "block"
                document.getElementById("Dlink").style.display = "none";
                document.getElementById("afterSubmit").style.display = "none";    
            }
        }
        function myFunction() {
        let text = document.getElementById("Dlink").value;
        if(text != "" && text != "Empty!"){
            /* Get the text field */
            var copyText = document.getElementById("Dlink");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);
            document.getElementById("copy").innerHTML = "✔Copied";
            setTimeout(() => {
                document.getElementById("copy").innerHTML = "💾Copy";
                
            }, 1000);
        }
            
}