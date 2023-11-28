+ SB=algokit
+ GOAL='algokit goal'
++ algokit goal account list
++ grep microAlgos
++ head -n 1
++ tail -n 1
++ awk '{print $2}'
++ tr -d '\r'
+ ACCT1=CCLVQE3HK5RG4N6CUJ4QVHOUSRHBRHDDCYSOS7M6G3J46DXMYTT3YJXNTQ
++ algokit goal account list
++ grep microAlgos
++ head -n 2
++ tail -n 1
++ awk '{print $2}'
++ tr -d '\r'
+ ACCT2=3NWTBDZIPHVCHPVWLDAVISGNJGDMCOW7JEFIX72GTO2JRMCRANGCWRC6OQ
++ algokit goal app create --creator CCLVQE3HK5RG4N6CUJ4QVHOUSRHBRHDDCYSOS7M6G3J46DXMYTT3YJXNTQ --approval-prog ./level0/approval.teal --clear-prog ./level0/clear.teal
++ grep 'Created app with app index'
++ awk '{print $6}'
++ tr -d '\r'
+ LEVEL_0_APPID=6699
+ cat level1/approval.teal
+ sed 's/{LEVEL_0_APPID}/6699/'
++ algokit goal app create --creator CCLVQE3HK5RG4N6CUJ4QVHOUSRHBRHDDCYSOS7M6G3J46DXMYTT3YJXNTQ --approval-prog ./level1/approval1.teal --clear-prog ./level1/clear.teal
++ grep 'Created app with app index'
++ awk '{print $6}'
++ tr -d '\r'
+ LEVEL_1_APPID=6700
+ cat level2/approval.teal
+ sed 's/{LEVEL_1_APPID}/6700/'
++ algokit goal app create --creator CCLVQE3HK5RG4N6CUJ4QVHOUSRHBRHDDCYSOS7M6G3J46DXMYTT3YJXNTQ --approval-prog ./level2/approval2.teal --clear-prog ./level2/clear.teal
++ grep 'Created app with app index'
++ awk '{print $6}'
++ tr -d '\r'
+ LEVEL_2_APPID=6701
+ cat level3/approval.teal
+ sed 's/{LEVEL_2_APPID}/6701/'
++ algokit goal app create --creator CCLVQE3HK5RG4N6CUJ4QVHOUSRHBRHDDCYSOS7M6G3J46DXMYTT3YJXNTQ --approval-prog ./level3/approval3.teal --clear-prog ./level3/clear.teal
++ grep 'Created app with app index'
++ awk '{print $6}'
++ tr -d '\r'
+ LEVEL_4_APPID=6702