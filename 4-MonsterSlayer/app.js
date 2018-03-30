function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function Player () {
    return {
            health: 100,
            attack: function (target) {
                var value = getRandomInt(1, 7) * this.playerAttackPower();
                target.health = target.health - value;
                this.specialCounter += 1;
                return "Player attacks the monster for " + value;
            },
            heal: function () {
                var value = getRandomInt(4, 10) * this.playerAttackPower();
                this.health += value;
                if (this.health >= 100) {
                    this.health = 100;
                }
                this.specialCounter += 1;
                return "Player heals for " + value;
            },
            special: function (target) {
                var value = getRandomInt(10, 25);
                target.health = target.health - value;
                this.specialCounter = 0;
                return "Player special-attacks the monster for " + value;
            },
            specialCounter: 0,
            playerAttackPower: function () {
                if (this.health < 60) {
                    return 2;
                } else if (this.health < 30) {
                    return 3;
                } else {
                    return 1;
                }                
            }            
        };
}

function Monster () {
    return {
            health: 100,
            attack: function (target) {
                var value = getRandomInt(2, 13) * this.monsterAttackPower();
                target.health = target.health - value;
                return "Monster attacks the player for " + value; 
            },
            monsterAttackPower: function () {
                if (this.health < 50) {
                    return 2;
                } else if (this.health < 25) {
                    return 3;
                } else {
                    return 1;
                } 
            }
        };
}

new Vue({
    el: "#app",
    data: {
        player: new Player(),
        monster: new Monster(),
        log: [],
        playing: false
    },
    computed: {
        playerHealth: function () {
            return this.player.health + "%";
        },
        monsterHealth: function () {
            return this.monster.health + "%";
        }
    },
    methods: {
        checkWin: function() {
            var message = null;
            if (this.player.health <= 0 && this.monster.health <= 0) {
                message = "Both parties have died. It's a draw!";
                this.playing = false;
                alert(message);
            } else if (this.monster.health <= 0) {
                message = "Monster health has gone below zero. You won!";
                this.playing = false;
                alert(message);
            } else if (this.player.health <= 0) {
                message = "Player health has gone below zero. You lost!";
                this.playing.false;
                alert(message);
            }
            return message;
        },
        attack: function () {
            var playerMessage = this.player.attack(this.monster);
            var monsterMessage = this.monster.attack(this.player);
            var log = {
                playerMessage: playerMessage,
                monsterMessage: monsterMessage
            }            
            this.log.unshift(log);
            this.checkWin();
        },
        heal: function () {
            var playerMessage = this.player.heal();
            var monsterMessage = this.monster.attack(this.player);

            var log = {
                playerMessage: playerMessage,
                monsterMessage: monsterMessage
            }            
            this.log.unshift(log);
            this.checkWin();
        },
        specialAttack: function () {
            var playerMessage = this.player.special(this.monster);
            var monsterMessage = this.monster.attack(this.player);

            var log = {
                playerMessage: playerMessage,
                monsterMessage: monsterMessage
            }
            this.log.unshift(log);
            this.checkWin();
        },
        newGame: function () {
            this.log = [],
            this.player.health = 100;
            this.player.specialCounter = 0;
            this.monster.health = 100;
            this.playing = true;
        }
    }
});
/*
Need to control health of each player. 
    - Need two properties for that
*/