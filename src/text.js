import lose1 from './va/lose1.m4a'
import lose2 from './va/lose2.m4a'
import lose3 from './va/lose3.m4a'
import win1 from './va/win1.m4a'
import win2 from './va/win2.m4a'
import win3 from './va/win3.m4a'
import loses1 from './va/loses1.m4a'
import loses2 from './va/loses2.m4a'
import loses3 from './va/loses3.m4a'
import wins1 from './va/wins1.m4a'
import wins2 from './va/wins2.m4a'
import wins3 from './va/wins3.m4a'
import dr from './va/dr.m4a'
import bjr from './va/bjr.m4a'
import broke from './va/broke.m4a'
import hos from './va/hos1.m4a'
import hos2 from './va/hos2.m4a'
import rd from './va/rd1.m4a'
import rd2 from './va/rd2.m4a'
import welcome from './va/welcome.m4a'

// Defining constants for the dialogues
const LOSE_1 = ["HEE HEE HEE HAH", lose1];
const LOSE_2 = ["You stink loser! BWAHAHAHAHA", lose2];
const LOSE_3 = ["Be a sport and play again!", lose3];
const LOSING_STREAK_1 = ["Well, you’re on a losing streak I'm sorry to say. But here are some inspirational words to hopefully boost your morale, 90% of gamblers quit just before they’re about to hit it big. Think on that one.", loses1];
const LOSING_STREAK_2 = ["Well looks like we finally found something you’re good at and that would be losing again…again…and again!", loses2];
const LOSING_STREAK_3 = ["Oh brother this guy stinks!", loses3];
const NO_MONEY = ["Well it looks like you’re out of money to gamble with but it's not game over. You can always swipe your credit card…DO IT…SWIPE YOUR CREDIT CARD RIGHT NOW…DO IT…GAMBLE MORE MONEY…YOU CAN STILL WIN.", broke];
const WINNING_STREAK_1 = ["Well looks like you’re on some kind of winning streak here…think there might be some issue in my code. Let me fix that real quick types on keyboard.", win1];
const WINNING_STREAK_2 = ["You’re on a roll here, you might be lucky…a little too lucky.", win2];
const WINNING_STREAK_3 = ["Well it must be your lucky night, keep this up and we’ll be out of business in no time. Think it's best if you call it quits.", win3];
const WIN_1 = ["Well looks like you won, good job!", wins1];
const WIN_2 = ["Winner winner chicken dinner!", wins2];
const WIN_3 = ["And we have a winner, congratulations!", wins3];
const BET_SET = ["What would you like to bet? Minimum is 100 and maximum is 5000", null];
const BJR = ["The game is called blackjack. Now how you win is you have to beat the dealer by getting as close to the number 21 as possible without exceeding it. You’re gonna start off with two cards, what you need to do first is add those two cards up and that’s your starting number. Face cards are worth 10 and an ace is worth 1 or 11. Now once you add those two cards up, you can either hit to get your number closer to 21 or you can stand if you like where your number’s at already. And that’s all there is to it, good luck!", bjr];

const DR = ["This game here is called dice. Now your first roll is what's called a coming out roll. If you score a 7 or an 11, you automatically win and beat the dealer. If you roll a 2,3 or 12 on your coming out roll, you automatically lose and the dealer wins. If you roll any other number than that, those are what are called points. Now you either have to roll those same numbers again for your second roll or you have to roll a 7 again to win.", dr];

const HOS = ["You can either hit or stand, what’s your choice?", hos];

const RD = ["Roll the Dice!", rd];

const WELCOME = ["This here is our games section. You have two choices of games, either blackjack or dice. Click on either game to learn about the rules and start playing!", welcome]

const HOS2 = ["Would you like to hit or do you want to stand?", hos2]

const RD2 = ["Give those dice a roll!", rd2]; 

// Export constants for use in other modules

// Exporting the constants
export {
  WELCOME,
  LOSE_1,
  LOSE_2,
  LOSE_3,
  LOSING_STREAK_1,
  LOSING_STREAK_2,
  LOSING_STREAK_3,
  NO_MONEY,
  WINNING_STREAK_1,
  WINNING_STREAK_2,
  WINNING_STREAK_3,
  WIN_1,
  WIN_2,
  WIN_3,
  BET_SET, HOS, HOS2, RD, RD2, DR, BJR, 
};
