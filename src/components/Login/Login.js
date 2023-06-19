import "./style.css"
export default function Login(){
    return(
        <div>
    <div class="header-w3l">
    <h1></h1>
</div>

<div class="main-w3layouts-agileinfo">
      
                <div class="wthree-form">
                    <h2>Fill out the form below to login</h2>
                    <form action="#" method="post">
                        <div class="form-sub-w3">
                            <input type="text" name="Username" placeholder="Username " required="" />
                        <div class="icon-w3">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                        </div>
                        <div class="form-sub-w3">
                            <input type="password" name="Password" placeholder="Password" required="" />
                        <div class="icon-w3">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                        </div>
                        </div>
                        <label class="anim">
                        <input type="checkbox" class="checkbox"/>
                            <span>Remember Me</span> 
                            <a href="#">Forgot Password</a>
                        </label> 
                        <div class="clear"></div>
                        <div class="submit-agileits">
                            <input type="submit" value="Login"/>
                        </div>
                    </form>

                </div>
</div>


</div>);
}