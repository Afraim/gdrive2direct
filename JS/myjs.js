        function validation(){
            let text = document.querySelector("input").value;
            if(text != ""){
                value(text);
            }
            else{
                document.getElementById("Dlink").innerHTML = "Empty!";
            }
        }    

        function value(T){
            var Array = T.split("/");
            console.log(Array);
            const TEXT = "https://drive.google.com/uc?export=download&id=";
            document.getElementById("Dlink").value = TEXT + Array[5];
        }
        function myFunction() {
        /* Get the text field */
             var copyText = document.getElementById("Dlink");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);
            document.getElementById("copy").innerHTML = "Copied";
            setTimeout(() => {
                document.getElementById("copy").innerHTML = "Copy";
                
            }, 1000);
            
}