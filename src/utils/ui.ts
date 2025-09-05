export const getAvatarFallbackLetters = (name: string): string => {

    const arrayName: string[] = name.split(' ')

    let letters = '';

    if (arrayName.length === 1) {

        letters = arrayName[0]?.charAt(0)

    } else {
        
        letters = arrayName.length >= 4 ? `${arrayName[0]?.charAt(0)}${arrayName[2]?.charAt(0)}` : `${arrayName[0]?.charAt(0)}${arrayName[1]?.charAt(0)}`

    }

    return letters.toUpperCase()

}

export const getAvatarFallbackBackground = (): string => {

    const symbols = '0123456789ABCDEF';

    let colorHex = '#';

    for(let i = 0; i<6; i++) {

        colorHex += symbols[Math.floor(Math.random()*16)]; 

    }

    //const colorHex: string = `#${randomNumber.toString(16).padStart(6, '0')}`

    return colorHex

}