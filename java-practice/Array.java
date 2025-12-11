import java.util.Scanner;

public class Array{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size: ");
        int size = sc.nextInt();
        int[] arr = new int[size];
        System.out.println("Enter " + size + " elements:");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println();
        for (int num : arr) {
            System.out.print(num + " ");
        }
        if(size>0){
            int Largest = arr[0];
            for(int i=1; i<size; i++){
                if (arr[i]>Largest){
                    Largest = arr[i];
                }
            }
        System.out.println("\nThe largest element is: " + Largest);
        }
    }
}