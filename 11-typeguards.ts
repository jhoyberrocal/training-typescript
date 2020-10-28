interface Bird {
    fly(): void,
    layEggs(): void
}

interface Fish {
    swim(): void,
    layEggs(): void
}

declare function getSmallPet(): Fish | Bird;

const pet = getSmallPet();

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim() !== undefined;
}

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

