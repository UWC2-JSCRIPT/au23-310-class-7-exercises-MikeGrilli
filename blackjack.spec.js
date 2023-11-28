describe('Test for the blackjack game', () => {
    it('Should calculate the score of a hand', () => {
        const hand = [
            {displayVal: '6', val :6, suit: 'hearts'},
            {displayVal: '7', val :7, suit: 'hearts'}

        ]
        const result = calcPoints(hand)
        expect(result.total).toEqual(13)

    }) 
})

describe('Test for the blackjack game', () => {
    it('Should calculate the score of a hand', () => {
        const hand = [
            {displayVal: '6', val :6, suit: 'hearts'},
            {displayVal: '7', val :7, suit: 'hearts'},
            {displayVal: '7', val :5, suit: 'hearts'}

        ]
        const result = calcPoints(hand)
        expect(result.total).toEqual(18)
    
    }) 
})

describe('Test for the blackjack game', () => {
    it('Should calculate if hand is soft', () => {
        const hand = [
            {displayVal: 'Ace', val :1, suit: 'hearts'},
            {displayVal: '7', val :7, suit: 'hearts'}
        ]
        const result = calcPoints(hand).isSoft
        expect(result).toBe(true)
    }) 
})


describe('Test to see if dealer should draw', () => {
    it('Should determine if dealer should draw', () => {
        const hand = [
            {displayVal: '10', val :10, suit: 'hearts'},
            {displayVal: '8', val :8, suit: 'hearts'}
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toBe(false)
    }) 
})






