

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>seek coding</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <!---we had linked our css file----->

</head>
 <style>
    	*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#login-form
{
    display: none;
}
.form-box
{
    width:380px;
	height:480px;
	position:relative;
	margin:2% auto;
	background:rgba(0,0,0,0.3);
	padding:10px;
    overflow: hidden;
}
.button-box
{
	width:220px;
	margin:35px auto;
	position:relative;
	box-shadow: 0 0 20px 9px #ff61241f;
	border-radius: 30px;
}
.toggle-btn
{
	padding:10px 30px;
	cursor:pointer;
	background:transparent;
	border:0;
	outline: none;
	position: relative;
}
#btn
{
	top: 0;
	left:0;
	position: absolute;
	width: 110px;
	height: 100%;
	background: #F3C693;
	border-radius: 30px;
	transition: .5s;
}
.input-group-login
{
	top: 150px;
	position:absolute;
	width:280px;
	transition:.5s;
}

.input-field
{
	width: 100%;
	padding:10px 0;
	margin:5px 0;
	border-left:0;
	border-top:0;
	border-right:0;
	border-bottom: 1px solid #999;
	outline:none;
	background: transparent;
}
.submit-btn
{
	width: 85%;
	padding: 10px 30px;
	cursor: pointer;
	display: block;
	margin: auto;
	background: #F3C693;
	border: 0;
	outline: none;
	border-radius: 30px;
}

#login
{
	left:50px;
}
#login input
{
	color:white;
	font-size:15;
}


    </style>
<body>
   
        
           
                
        
                   <button class='loginbtn' onclick="document.getElementById('login-form').style.display='block'" style="width:auto;">Loginsss</button>
               
           
       
        <div id='login-form'class='login-page'>
            <div class="form-box">
               
                <form id='login' class='input-group-login'>
		                <input type='password'class='input-field'placeholder='Enter Password' required>
		                 <button type='submit'class='submit-btn'>Log iniii</button>
		            </form>
		
       </div>
       
   
    <script>
     var x=document.getElementById('login');
		var z=document.getElementById('btn');
		
		// function login()
		// {
		// 	x.style.left='50px';
		// 	y.style.left='450px';
		// 	z.style.left='0px';
		// }
        var modal = document.getElementById('login-form');
        window.onclick = function(event) 
        {
            if (event.target == modal) 
            {
                modal.style.display = "block";
            }
        }
    </script>
	</body>
</html>