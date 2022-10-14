import bs4, requests
import pandas as pd

def search_website(query:str):
    string=query



    

    flipkart="https://www.flipkart.com/search?q="
    flipkart+=string+"&page="
    fNames=[] 
    fPrices=[]
    fImages=[]
    rfTrio=[]
    for i in range (1,3):
        getFlip=requests.get(flipkart+str(i))
        getFlipText=bs4.BeautifulSoup(getFlip.content,'html.parser')

        flipPrices=getFlipText.find_all(class_="_30jeq3 _1_WHN1")#this class targets all the prices on flipkart and returns a list
        flipNames=getFlipText.find_all(class_="_4rR01T")
        flipImage=getFlipText.find_all(class_="_396cs4 _3exPp9")
        for i in flipImage:
            fImages.append(i.attrs['src'])
        for i in flipNames:
            fNames.append(i.get_text())
        for i in flipPrices:
            fPrices.append(i.get_text())    
    
    reliance="https://www.reliancedigital.in/search?q="
    reliance+=string+"&page="
    rPrices=[] 
    rNames=[]
    rImages=[]
    for i in range(0,2):
        getReli=requests.get(reliance+str(i))
        getReliText=bs4.BeautifulSoup(getReli.content,'html.parser')

        reliPrices=getReliText.find_all(class_="sc-bxivhb dmBTBc")
        reliNames=getReliText.find_all(class_="sp__name")
        reliImage=getReliText.find_all("img")

        for i in reliPrices:
            rPrices.append(i.get_text())
        for i in reliNames:
            rNames.append(i.get_text())
        for i in reliImage:
            rImages.append(i.attrs['src'])

    class Answer:
        def __init__(self,name,price,image):
            self.name=name
            self.price=price
            self.image=image
    c=0
    for i in range(0,len(fNames)):
        s1=fNames[i].split()
        for j in range(0,len(rNames)):
            s2=rNames[j].split()
            for k in s1:
                for l in s2:
                    if(k.__contains__(l)==l.__contains__(k)):
                        c=c+1
            if(c>=len(fNames)/2 or c>=len(rNames)/2):
                if(fPrices[i]<rPrices[j]):
                    rfTrio.append(Answer(fNames[i],fPrices[i],fImages[i]))
                else:
                    rfTrio.append(Answer(rNames[j],rPrices[j],fImages[j]))
    
    newlist=set(rfTrio)
    list(newlist)
    return(newlist)