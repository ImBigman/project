FactoryBot.define do
  sequence :title do |n|
    "##{n} Episode"
  end

  factory :episode do
    thumbs { '/images/youtube.svg' }
    title
    description { 'New episode from channel' }
    url { 'https://www.youtube.com/embed/iFg3kVBOOmk' }
    section { nil }
  end
end
