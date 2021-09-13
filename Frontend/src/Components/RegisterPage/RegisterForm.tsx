import {useState} from 'react'
import RegisterBtn from './RegisterBtn'

export default function RegisterForm (){

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        areTermsAccepted: false
    })

    function handleChange(e: any): void{
        const {name, value, type, checked} = e.target
        type === 'checkbox' ? setUserData({
            ...userData,
            [name]: checked
        }) : 
        setUserData({
            ...userData,
            [name]: value
        })
    }

    function handleRegister(e: any){
        e.preventDefault()
        //todo: POST userData to server
    }

    return(
        <div className="flex flex-col gap-4 px-4 mt-4">
            <form>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${!userData.name && "opacity-30"}  border-grey-light focus:opacity-100 bg-background-grey`} 
                        type="text" 
                        value={userData.name} 
                        name="name" 
                        placeholder="Orangutan" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="email">Email</label>
                    <input
                        className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${!userData.email && "opacity-30"}  border-grey-light focus:opacity-100 bg-background-grey`} 
                        type="email" 
                        value={userData.email} 
                        name="email" 
                        placeholder="mario@gmail.com" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="password">Password</label>
                    <input
                        className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${!userData.password && "opacity-30"}  border-grey-light focus:opacity-100 bg-background-grey`} 
                        type="password" 
                        value={userData.password} 
                        name="password" 
                        placeholder="password..." 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="password2">Repeat password</label>
                    <input
                        className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${!userData.password2 && "opacity-30"}  border-grey-light focus:opacity-100 bg-background-grey`} 
                        type="password" 
                        value={userData.password2} 
                        name="password2" 
                        placeholder="password..." 
                        onChange={handleChange} 
                        required
                    />
                    
                </div>
                <div className="flex gap-2 mt-4 items-center">
                    <input 
                        name="areTermsAccepted"
                        type="checkbox" 
                        checked={userData.areTermsAccepted} 
                        onChange={handleChange}
                        required/>
                        
                    <label htmlFor="areTermsAccepted">
                        Accept Terms and Conditions
                    </label>
                </div>
                <RegisterBtn btnText="Register" register={handleRegister} />
            </form>
        </div>
    )
}


