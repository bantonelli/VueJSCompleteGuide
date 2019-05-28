import stocks from '../../data/stocks';
export default {
    state : {
        stocks: []
    },
    mutations : {
        'SET_STOCKS': (state, stocks) => {
            state.stocks = stocks;
        },
        'RND_STOCKS': (state) => {
            
        },
        'BUY_STOCKS': (state, order) => {

        }
    },
    actions : {
        initStocks: ({commit}) => {
            commit('SET_STOCKS', stocks);
        },
        randomizeStocks: ({commit}) => {
            commit('RND_STOCKS');
        }
    },
    getters : {
        marketStocks: state => {
            return state.stocks;
        }
    }
};