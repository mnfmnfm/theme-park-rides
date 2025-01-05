import rides from './assets/rides.json'

function useRide(id) {
    // in a real application
    // this would likely make a fetch call or do other side effect work
    // so it's written as a custom hook here to feel normal
    // but it's not actually doing anything hook-y
    // so I fully admit that it could just be a function
    // but it feels so nice to make it look like a hook
    return rides.find(x => x.id === id);
}

export default useRide;