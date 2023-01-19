const QUOTES = [
  {
    text: "Our thoughts become our words, our words become our actions, our actions become our character, our character becomes our destiny. - Gandhi",
  },
  {
    text: "Our number one value isn't in any of the skills we have. It's that we're essentially curious. - Jim Coudal",
  },
  {
    text: "If you have built castles in the air, your work need not be lost. That is where they should be. Now build the foundations under them. - Henry David Thoreau",
  },
  {
    text: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom. - Anais Nin",
  },
  {
    text: "Be careful what you pretend to be, because you are what you pretend to be. - Kurt Vonnegut",
  },
  {
    text: "Today is life-the only life you are sure of. Make the most of today. Get interested in something. Shake yourself awake. Develop a hobby. Let the winds of enthusiasm sweep through you. Live today with gusto. - Dale Carnegie",
  },
  {
    text: "Some people die when they are 25 and aren't buried until they are 75. (Ouch.) - Benjamin Franklin",
  },
  {
    text: "If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them. - Bruce Lee",
  },
];

export const quoteRandomizer = () => {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[randomIndex];
};
