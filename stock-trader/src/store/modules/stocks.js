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