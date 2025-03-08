from django.shortcuts import render
from .models import Profile
from django.contrib import messages
from django.http import HttpResponse
from django.template import loader
import io
import pdfkit
from django.http import Http404
# Create your views here.

def home(request):
    profile_id = None
    if request.method=="POST":
        name=request.POST.get("name","")
        email=request.POST.get("email","")
        linkedin = request.POST.get("linkedin","")
        github=request.POST.get("github","")
        phone=request.POST.get("phone","")
        location=request.POST.get("location","")
        introduction=request.POST.get("introduction","")
        degree=request.POST.get("degree","")
        school=request.POST.get("school","")
        university=request.POST.get("university","")
        experience=request.POST.get("experience","")
        skills=request.POST.get("skills","")
        certifications=request.POST.get("certifications","")
        projects=request.POST.get("projects","")


        profile=Profile(name=name,email=email,linkedin=linkedin,github=github,
                        phone=phone,location=location,introduction=introduction,degree=degree,
                        school=school,university=university,experience=experience,
                        skills=skills,certifications=certifications,projects=projects)
        profile.save()
        messages.success(request, "Profile created successfully!")
        return render(request, 'app/index.html', {'id': profile.id})
    return render(request,'app/index.html')

def resume(request,id):
    # user_profile = Profile.objects.get(pk=id)
    # template = loader.get_template('app/resume.html')
    # html = template.render({'user_profile':user_profile})
    # options ={
    #     'page-size':'Letter',
    #     'encoding':"UTF-8",
    # }
    
    # config = pdfkit.configuration(wkhtmltopdf=r'C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe')
    # pdf = pdfkit.from_string(html,False,options=options,configuration=config)
    # response = HttpResponse(pdf,content_type='application/pdf')
    # response['Content-Disposition'] ='attachment;filename=resume.pdf'
    # return response
    return render(request,'app/resume.html')

    

def list(request):
    profiles = Profile.objects.all()
    return render(request,'app/list.html',{'profiles':profiles})
