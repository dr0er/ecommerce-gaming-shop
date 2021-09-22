export default function RegisterBtn(props: {btnText: string, register: any}) {
    return (
        <div>
            <button 
                type="submit" 
                className="flex px-9 py-3 w-full justify-center bg-grey-light text-white rounded-2xl text-sm mt-9 cursor-pointer"
			    onClick={() => props.register}>
                    {props.btnText}
            </button>    
        </div>
    )
}

