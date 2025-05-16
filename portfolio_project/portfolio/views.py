from django.shortcuts import render
from .models import project
from django.core.mail import send_mail
from .forms import ContactForm
# Create your views here.

def home(request):
    
   projects = project.objects.all()
   return render(request, 'portfolio/home.html', {'projects': projects})

def projects(request):
    projects = project.objects.all()
    return render(request, 'portfolio/projects.html', {'projects': projects})

def about(request):
    return render(request, 'portfolio/about.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Replace with your email setup
            send_mail(
                subject=f"Message from {form.cleaned_data['name']}",
                message=form.cleaned_data['message'],
                from_email=form.cleaned_data['email'],
                recipient_list=['your-email@example.com'],
            )
            return render(request, 'portfolio/contact.html', {'form': ContactForm(), 'success': True})
    else:
        form = ContactForm()

    return render(request, 'portfolio/contact.html', {'form': form})
