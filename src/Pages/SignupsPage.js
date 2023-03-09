import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";


const SignupsPage = () => {

    //getting the signupList from the router context
    const [signupList] = useOutletContext();
    const navigate = useNavigate();

    // console.log(signupList);

    //outlet allows us to render child elements 
    return (
        <div>
            <h1> Signups Page</h1>
                <select onChange={(e) => {
                    navigate(`/signups/${e.target.value}`)
                }}>
                    <option></option>
                    {signupList.map((signup)=> {
                        return (<option value={signup.email}>{signup.firstName}</option>)
                    })}
                </select>
                
                <Outlet context={[signupList]} />
        </div>
    )
}

export default SignupsPage;