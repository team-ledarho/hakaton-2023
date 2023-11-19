import ReactDOM from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectorIsOpen } from "@services/slices/popupSlice"
import { onOpen } from "@services/slices/popupSlice"
import { GoogleLogin, googleLogout } from "@react-oauth/google"
import toast from "react-hot-toast"
import { useGetGoogleUserData, useGoogleStateLogin } from "../../hooks/google.hook"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const portal = document.getElementById("portal")

export const Modal = () => {
    const open = useSelector(selectorIsOpen)
    const [isAuthGoogle, setIsAuthGoogle] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { googleUser } = useGetGoogleUserData()
    const logout = googleLogout()

    useEffect(() => {
        if (googleUser) {
            setIsAuthGoogle(true)
        } else {
            setIsAuthGoogle(false)
        }
    }, [googleUser, isAuthGoogle])

    const onModal = () => {
        dispatch(onOpen())
    }

    const onLoginGoogle = (response) => {
        if (response) {
            try {
                useGoogleStateLogin(response.credential)
                toast.success("Вы вошли в Google аккаунт")
                window.location.reload();
            } catch (error) {
                toast.error("Не удалось войти в Google аккаунт")
            }
        }
    }

    return ReactDOM.createPortal(
        open && <div className="py-10 fixed z-10 min-h-screen w-screen antialiased font-medium text-gray-800  ">
            <div className="min-[300px]:max-w-[200px] min-[410px]:max-w-[300px] min-[530px]:max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 mx-auto bg-white border-[1px] border-gray-200 shadow rounded-xl hover:shadow-lg transition-all duration-150 ease-linear" x-show="modal"
            >
                <div className="relative p-6">
                    <a onClick={onModal} className="absolute top-1.5 right-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 cursor-pointer fill-current text-slate-500 hover:text-slate-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </a>
                    <h1 className="sm:text-3xl min-[300px]:text-xl font-bold">Вы хотите добавить событие в Google Календарь?</h1>
                    {isAuthGoogle && <p className="text-sm text-gray-500">После добавления вы будете перенавлены на Google Календарь</p>}
                    {isAuthGoogle ? <div className="flex flex-row mt-6 space-x-2 justify-evenly">
                        <a onClick={onModal} className="w-full cursor-pointer py-3 text-sm text-center text-white transition duration-150 ease-linear bg-green-600 border border-green-600 rounded-lg hover:bg-green-500">Добавить</a>
                        <a onClick={onModal} className="w-full cursor-pointer py-3 text-sm text-center text-white transition duration-150 ease-linear bg-red-600 border border-red-600 rounded-lg hover:bg-red-500">Отменить</a>
                    </div> : <div className="my-4 flex flex-col gap-1">
                        <p className="text-black font-normal text-ms">Войдите через Google аккаунт</p>
                        <GoogleLogin
                            onSuccess={(response) => onLoginGoogle(response)}
                            onError={(response) => onLoginGoogle(response)}
                        />
                    </div>}
                </div>
            </div>
        </div>, portal
    )
}
