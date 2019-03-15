<?php
	session_start();
	$mysqli = new mysqli('localhost', 'root', '', 'sugeco-cebu_db') or die (mysqli_error($mysqli));
	$conusreg_fname='';
	$conusreg_lname='';
	$conusreg_number='';
	$conusreg_email='';
	$conusreg_message='';
	$contMessage=false;
	$conusreg_date=time();

if (isset($_POST['conusreg_submit'])){
 if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']){
        var_dump($_POST);
        $secret = "6Lf6yJcUAAAAAHjJ6gIxm03FrotR8fhtG87NmCPe";
        $ip = $_SERVER['REMOTE_ADDR'];
        $captcha = $_POST['g-recaptcha-response'];
        $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");
        var_dump($rsp);
        $arr = json_decode($rsp,TRUE);
        if($arr['success']){
            //echo 'Done';

	$conusreg_fname=$_POST['conusreg_fname'];
	$conusreg_lname=$_POST['conusreg_lname'];
	$conusreg_number=$_POST['conusreg_number'];
	$conusreg_email=$_POST['conusreg_email'];
	$conusreg_message=$_POST['conusreg_message'];
	$mysqli->query("INSERT INTO conusreg_tb (conusreg_fname, conusreg_lname, conusreg_number, conusreg_email, conusreg_message) VALUES ('$conusreg_fname', '$conusreg_lname', $conusreg_number, '$conusreg_email', '$conusreg_message')") or die($mysqli->error);
	$_SESSION['message']= "Record has been saved!";
	$contConMess=$_SESSION['message'];
	$contMessage=true;
	$_SESSION['msg_type'] = "Success";
	header ("location: contactus.php");
}
        }else{
            echo 'SPam';
        }
        
    }

/*
if (isset($_GET['delete'])){
	$id =  $_GET['delete'];
	$mysqli->query("DELETE FROM data WHERE id=$id") or die($mysqli->error());
	$_SESSION['message']= "Record has been deleted!";
	$_SESSION['msg_type'] = "danger";
	header ("location: index.php");
}
if (isset($_GET['edit'])){
	$id = $_GET['edit'];
	$update = true;
	$result = $mysqli->query("SELECT * FROM data WHERE id=$id") or die($mysqli->error());
	if (count($result) ==1){
		$row =$result->fetch_array();
		$uname =$row['name'];
		$ulocation = $row['location'];
	}
}
if (isset($_POST['update'])){
	$id =$_POST['id'];
	$uname =$_POST['uname'];
	$ulocation =$_POST['ulocation'];
	$mysqli->query("UPDATE data SET name='$uname',location ='$ulocation' WHERE id =$id") or die($mysqli->error);
	$_SESSION['message'] ="Record has ben updated!";
	$_SESSION['msg_type'] ="warning";
	header ('location: index.php');
}
*/
?>