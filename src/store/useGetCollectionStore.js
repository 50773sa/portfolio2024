import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { create } from 'zustand'

const useGetProjectsStore = create((set) => ({
    isLoading: true,
    setIsLoading: (bool) => set({ isLoading: bool }),
    isError: false,
    setIsError: (bool) => set({ isError: bool }),
    errorMsg: '',
    setErrorMsg: (state) => set({ errorMsg: state }),
    data: [],
    setData: (data) => set({ data: data }),

    getData: async (coll) => {
        const collRef = collection(db, coll)
		const snapshot = await getDocs(collRef)

        try {
            const docs = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            set({ isLoading: false })

            return docs

        } catch(err) {
            set({ isError: true, errorMsg: err.message })
            console.log('err', err)
        }
    }
}))

export default useGetProjectsStore