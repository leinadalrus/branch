import { expect, test } from 'vitest'
import { DragAndDropCard, DealtCardSentinel, TradingCard, TabletopPlanar } from '../src/components/cards.component'

test('Test Card feature component', () => {
  expect(DragAndDropCard).toBe([1, 1])
})
