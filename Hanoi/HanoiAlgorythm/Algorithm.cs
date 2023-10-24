using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HanoiAlgorithm
{
    public static class Algorithm
    {
        public static void SolveHanoiTower(int discAmount)
        {
            char startStick = 'A';
            char middleStick = 'B';
            char finishStick = 'C';

            int[] firstStickArray = new int[discAmount];

            for (int i = 0; i < discAmount; i++)
            {
                firstStickArray[i] = discAmount - i;
            }


            int[] middleStickArray = new int[discAmount];
            int[] finishStickArray = new int[discAmount];

            HanoiSolver(discAmount, startStick, middleStick, finishStick, ref firstStickArray, ref middleStickArray, ref finishStickArray);
        }

        public static int[][] HanoiSolver(int discAmount, char startStick, char middleStick, char finishStick, 
            ref int[] firstStickArray, ref int[] middleStickArray, ref int[] finishStickArray)
        {

            int startStickValue = (int)Enum.Parse(typeof(Stick), startStick.ToString());
            int finishStickValue = (int)Enum.Parse(typeof(Stick), finishStick.ToString());


            if (startStickValue == 0)
            {
                int index = Array.IndexOf(firstStickArray, discAmount);
                if (index >= 0)
                {
                    firstStickArray[index] = 0;
                }
            }
            else if (startStickValue == 1)
            {
                int index = Array.IndexOf(middleStickArray, discAmount);
                if (index >= 0)
                {
                    middleStickArray[index] = 0;
                }
            }
            else
            {
                int index = Array.IndexOf(finishStickArray, discAmount);
                if (index >= 0)
                {
                    finishStickArray[index] = 0;
                }
            }



            if (finishStickValue == 0)
            {
                for (int i = 0; i < firstStickArray.Length; i++)
                {
                    if (firstStickArray[i] == 0)
                    {
                        firstStickArray[i] = discAmount;
                        break;
                    }
                }
            }
            else if (finishStickValue == 1)
            {
                for (int i = 0; i < middleStickArray.Length; i++)
                {
                    if (middleStickArray[i] == 0)
                    {
                        middleStickArray[i] = discAmount;
                        break;
                    }
                }
            }
            else
            {
                for (int i = 0; i < finishStickArray.Length; i++)
                {
                    if (finishStickArray[i] == 0)
                    {
                        finishStickArray[i] = discAmount;
                        break;
                    }
                }
            }


            if (discAmount == 1)
            {
                
                Console.WriteLine($"Переместить диск 1 с {startStick} на {finishStick}");
                return new int[][] { firstStickArray, middleStickArray, finishStickArray };
            }

            HanoiSolver(discAmount - 1, startStick, finishStick, middleStick, ref firstStickArray, ref middleStickArray, ref finishStickArray);
            Console.WriteLine($"Переместить диск {discAmount} с {startStickValue}{startStick} на {finishStickValue}{finishStick}");
            HanoiSolver(discAmount - 1, middleStick, startStick, finishStick, ref firstStickArray, ref middleStickArray, ref finishStickArray);

            return new int[][] { firstStickArray, middleStickArray, finishStickArray };
        }
    }
}
