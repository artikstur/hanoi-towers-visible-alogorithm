
using System.Threading.Tasks;
using System;

namespace Program
{
    public class Program
    {
        static void Main(string[] args)
        {

        }
        public Task<object> SolveHanoiTower(int discAmount)
        {
            
            char startStick = 'A';
            char middleStick = 'B';
            char finishStick = 'C';
            int activeIdx = 0;

            int nums = (int)Math.Pow(2, discAmount) - 1;

            string[] array = new string[nums];

            HanoiSolver(discAmount, startStick, middleStick, finishStick, ref array, ref activeIdx);

            object result = array;

            Task<object> task = Task.FromResult(result);

            return task;
        }

        public static void HanoiSolver(int discAmount, char startStick, char middleStick, char finishStick, ref string[] array, ref int activeIdx)
        {

            int startStickValue = (int)Enum.Parse(typeof(Stick), startStick.ToString());
            int finishStickValue = (int)Enum.Parse(typeof(Stick), finishStick.ToString());


            if (discAmount == 1)
            {
                Console.WriteLine($"Переместить диск 1 с {startStick} на {finishStick}");
                GetData( 1, startStickValue, finishStickValue, ref array, ref activeIdx);
                return;
            }

            HanoiSolver(discAmount - 1, startStick, finishStick, middleStick, ref array, ref activeIdx);
            Console.WriteLine($"Переместить диск {discAmount} с {startStickValue}{startStick} на {finishStickValue}{finishStick}");
            GetData( discAmount, startStickValue, finishStickValue, ref array, ref activeIdx);
            HanoiSolver(discAmount - 1, middleStick, startStick, finishStick, ref array, ref activeIdx);
        }
        
        public static void GetData(int ringNumber, int startStickValue, int finishStickValue, ref string[] array, ref int activeIdx)
        {
            var temp = $"{ringNumber} {startStickValue} {finishStickValue}";
           
            array[activeIdx] = temp;
            activeIdx++;
        }
        public async Task<object> Add(string a)
        {
            return a as object;
        }
    }   
}