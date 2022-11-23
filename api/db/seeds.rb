puts 'Creating articles...'

# 適当なTodoを5つ作成
5.times do |i|
  Article.create(
    title: "Article#{i + 1}",
    description: "description#{i + 1}",
    good: "good#{i + 1}",
    bad: "bad#{i + 1}",
  )
end

puts '...Finished!'