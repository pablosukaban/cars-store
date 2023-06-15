import {useState} from "react"

export const useDoSome = (cb) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const doSome = async () => {
        setLoading(true)
        setError(null)
        try {
            await cb()
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        doSome
    }
}