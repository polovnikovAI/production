import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments'

describe('comments.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comment: {
                    isLoading: true,
                },
            },
        }
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comment: { error: 'error' },
            },
        }
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error')
    })
})
