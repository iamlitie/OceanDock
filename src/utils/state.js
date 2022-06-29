const saveState = (name , state) => {
    try {
        // console.log(state)
        const data = JSON.stringify(state)
        // console.log(data)
        localStorage.setItem(name , data)
    } catch (err) {
        console.log(err)
    }
}

const loadState = (name) => {
    try {
        const data = localStorage.getItem(name)
        // console.log(data)
        if (data) {
            // console.log(JSON.parse(data))
            return JSON.parse(data)
        } else {
            return undefined
        }
    } catch (err) {
        console.log(err)
    }
}

export {
    saveState,
    loadState
}