export default function func(places){
    const modifiedPlaces = places.map(place => {
        return {
            ...place,
            title : place.title.replace(/\s/g, '')
        }
    })

    return modifiedPlaces;
}

// func(API)