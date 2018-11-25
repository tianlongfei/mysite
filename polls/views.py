from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
	security_dict = {'000333.SZ': '美的集团', '603338.SH': '浙江鼎力'}
	context = {'security_dict': security_dict}
	return render(request, 'polls/index.html', context)

def detail(request, security_code):
	context = {'security_code': security_code}
	return render(request, 'polls/detail.html', context)


def calculator(request):
	return render(request, 'polls/calculator.html')