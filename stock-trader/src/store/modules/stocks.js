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
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.44));
            });
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