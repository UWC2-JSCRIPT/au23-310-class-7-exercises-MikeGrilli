describe('Test for the blackjack game', () => {
    it('Should calculate the score of a hand', () => {
        const hand = [
            {displayVal: '6', val :6, suit: 'hearts'},
            {displayVal: '7', val :7, suit: 'hearts'}

        ]
        const result = calcPoints(hand)
        expect(result.total).toEqual(13)
        expect(result.isSoft).toEqual(false)
    }) 
})