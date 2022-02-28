from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

from .models import Defib


@api_view(['GET', 'POST'])
def get_all_defibs(request):
    # return HttpResponse('Hello World!')
    if request.method == 'POST':
        user_id = User.objects.get(username=request.data['username'])
        new_defib = Defib.objects.create(
            long = request.data['long'],
            lat = request.data['lat'],
            photo_url = request.data['photo_url'],
            access = request.data['access'],
            approved = request.data['approved'],
            user_id = user_id
        )
        return Response({'Success': f'Created new defibrillator with id: {new_defib.id}'})

    try:
        data = Defib.objects.all()
        return HttpResponse(data)
    except Exception as e:
        return Response({'Error': f"{e}"})
