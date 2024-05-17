
export const handleText = (Text, number) => {
    if (Text.length > number) {
        return Text.substring(0, number) + "..." 
          
    } else {
        return Text
    }

}