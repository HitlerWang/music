#!/bin/env python
# Author : wangshan
from lxml import etree
import requests
class Musci():
    def __init__(self):
        self.home_url='https://music.163.com/'
        self.single_list='https://music.163.com/#/discover/artist'
        self.songlist_base='https://music.163.com/#/artist?id={}'
        self.session=requests.session()
        self.header={
            }
        self.session.headers=self.header
        # self.session.get(self.home_url)

    def cralwer_single_id(self):
        res=self.session.get(self.single_list)
        doc=etree.HTML(res.text)
        singid_nodes=doc.xpath('//a[@class="nm nm-icn f-thide s-fc0"]')
        for node in singid_nodes:
            print 'sdf'

    def crawler_songes(self):
        res=self.session.get(self.songlist_base.format('10559'))
        print res.text
    def start(self):
        self.crawler_songes()


def control():
    music=Musci()
    music.start()

if __name__ == '__main__':
    control()