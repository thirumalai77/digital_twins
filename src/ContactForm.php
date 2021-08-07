<?php

echo "incoming";
if($_POST["message"]) {


mail("karthikgs.softengg@gmail.com", "Enquiry Details",


$_POST["message"]. "From:"+ $_POST['email']);


}


?>