import ReactDOM from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectorIsOpen } from "@services/slices/popupSlice"
import { onOpen } from "@services/slices/popupSlice"

const portal = document.getElementById("portal")

export const Modal = () => {
    const open = useSelector(selectorIsOpen)
    const dispatch = useDispatch()

    const onModal = () => {
        dispatch(onOpen())
    }

    return ReactDOM.createPortal(
        open && <div class="py-10 fixed z-10 min-h-screen w-screen antialiased font-medium text-gray-800  ">
            <div class="min-[300px]:max-w-[200px] min-[410px]:max-w-[300px] min-[530px]:max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 mx-auto bg-white border-[1px] border-gray-200 shadow rounded-xl hover:shadow-lg transition-all duration-150 ease-linear" x-show="modal"
            >
                <div class="relative p-6">
                    <a class="absolute top-1.5 right-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer fill-current text-slate-500 hover:text-slate-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </a>
                    <h1 class="sm:text-3xl min-[300px]:text-xl font-bold">Вы хотетите добавить событие в Google Календарь?</h1>
                    <p class="text-sm text-gray-500">После добавления вы будете перенавлены на Google Календарь</p>
                    <div class="flex flex-row mt-6 space-x-2 justify-evenly">
                        <a onClick={onModal} class="w-full cursor-pointer py-3 text-sm text-center text-white transition duration-150 ease-linear bg-green-600 border border-green-600 rounded-lg hover:bg-green-500">Delete</a>
                        <a onClick={onModal} class="w-full cursor-pointer py-3 text-sm text-center text-white transition duration-150 ease-linear bg-red-600 border border-red-600 rounded-lg hover:bg-red-500">Cancel</a>
                    </div>
                </div>
            </div>
        </div>, portal
    )
}
