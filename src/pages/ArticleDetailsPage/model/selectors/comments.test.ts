import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments'

describe('comments.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        }
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error',
            },
        }
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error')
    })
})
