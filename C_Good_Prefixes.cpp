#include <bits/stdc++.h>
using namespace std;

int main()
{
    long long t, n, a, count = 0;
    cin >> t;

    while (t--)
    {
        long long max = 0, sum = 0;
        count=0;
        cin >> n;
        while (n--)
        {
            cin >> a;
            if (a < sum)
            {
                sum += a;
            }
            else
            {
                max = a;
                sum += a;
            }
            if ((sum - max) == max)
            {
                count++;
            }
        }
        cout << count << endl;
    }

    return 0;
}
