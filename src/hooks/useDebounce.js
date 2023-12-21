function useDebounce(cb,delay=2000){
    let timerId;
    return (...args)=>{
        clearTimeout(timerId);
        setTimeout(()=>{
            timerId=cb(...args)
        },delay)
    }
}

export default useDebounce;